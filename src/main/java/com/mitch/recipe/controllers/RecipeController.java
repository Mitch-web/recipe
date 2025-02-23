package com.mitch.recipe.controllers;

import com.mitch.recipe.models.Recipe;
import com.mitch.recipe.services.PopularRecipesService;
import com.mitch.recipe.services.RedisRecipeService;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "*")
public class RecipeController {

    private final RedisRecipeService redisRecipeService;
    private final PopularRecipesService recipeViewService;
    private final PopularRecipesService popularRecipesService;

    public RecipeController(RedisRecipeService redisRecipeService, PopularRecipesService recipeViewService,
                            PopularRecipesService popularRecipesService) {
        this.redisRecipeService = redisRecipeService;
        this.recipeViewService = recipeViewService;
        this.popularRecipesService = popularRecipesService;
    }

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return redisRecipeService.getRecipeRepository().findAll();
    }

    @PostMapping
    public Recipe addRecipe(@RequestBody Recipe recipe) {
        return redisRecipeService.getRecipeRepository().save(recipe);
    }

    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable String id,
                                @RequestParam(required = false, name = "disable_increment") String disableIncrement) {
        if (disableIncrement == null) {
            recipeViewService.incrementViews(id);
        }
        return redisRecipeService.findById(id);
    }

    @GetMapping("/categories/{category}")
    public List<Recipe> getByCategory(@PathVariable String category) {
        return redisRecipeService.getRecipeRepository().findByCategory(category);
    }

    @GetMapping("/categories")
    public Map<String, List<Recipe>> getByCategories() {
        List<Recipe> recipes = redisRecipeService.getRecipeRepository().findAll();

        return recipes.stream()
                .collect(Collectors.groupingBy(Recipe::category))
                .entrySet()
                .stream()
                .collect(Collectors.toMap(Map.Entry::getKey, e -> e.getValue().stream().limit(2).toList()));
    }

    @GetMapping("/name/{name}")
    public Recipe getByName(@PathVariable String name) {
        return redisRecipeService.getRecipeRepository().findByName(name);
    }

    @GetMapping("/popular")
    public Set<ZSetOperations.TypedTuple<String>> getPopularRecipes() {
        return popularRecipesService.getPopularRecipes();
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable String id) {
        redisRecipeService.getRecipeRepository().deleteById(id);
    }
}
