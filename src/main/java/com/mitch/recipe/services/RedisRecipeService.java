package com.mitch.recipe.services;

import com.mitch.recipe.models.Recipe;
import com.mitch.recipe.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class RedisRecipeService {

    private final RedisTemplate<String, Object> objectRedisTemplate;
    private final RecipeRepository recipeRepository;

    @Autowired
    public RedisRecipeService(@Qualifier("objectRedisTemplate") RedisTemplate<String, Object> objectRedisTemplate,
                              RecipeRepository recipeRepository) {
        this.objectRedisTemplate = objectRedisTemplate;
        this.recipeRepository = recipeRepository;
    }

    public Recipe findById(String id) {
        Recipe cachedRecipe = (Recipe) objectRedisTemplate.opsForValue().get("recipe:" + id);

        if (cachedRecipe != null) {
            System.out.println("Cache working!");
            return cachedRecipe;
        }

        Recipe recipeFromDB = recipeRepository.findById(id).orElse(null);

        if (recipeFromDB != null) {
            objectRedisTemplate.opsForValue().set("recipe:" + id, recipeFromDB, 10, TimeUnit.MINUTES);
            System.out.println("Recipe successfully cached!");
        }

        return recipeFromDB;
    }

    public RecipeRepository getRecipeRepository() {
        return recipeRepository;
    }
}
