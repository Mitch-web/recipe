package com.mitch.recipe.repository;

import com.mitch.recipe.models.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface RecipeRepository extends MongoRepository<Recipe, String> {

    List<Recipe> findByCategory(String category);
    Recipe findByName(String name);
    List<Recipe> findByNameContainingIgnoreCase(String name);

}
