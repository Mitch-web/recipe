package com.mitch.recipe.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "recipes")
public record Recipe(
        @Id String id,
        String name,
        List<Ingredient> ingredients,
        List<String> steps,
        int cookTime,
        String category
) {}
