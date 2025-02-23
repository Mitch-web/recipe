package com.mitch.recipe.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ZSetOperations;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PopularRecipesService {

    private static final String KEY = "popular_recipes";

    private final RedisTemplate<String, String> stringRedisTemplate;

    @Autowired
    public PopularRecipesService(@Qualifier("stringRedisTemplate") RedisTemplate<String, String> stringRedisTemplate) {
        this.stringRedisTemplate = stringRedisTemplate;
    }

    public void incrementViews(String recipeId) {
        stringRedisTemplate.opsForZSet().incrementScore(KEY, recipeId, 1);
    }

    public Set<ZSetOperations.TypedTuple<String>> getPopularRecipes() {
        return stringRedisTemplate.opsForZSet().reverseRangeWithScores(KEY, 0, 3);
    }
}
