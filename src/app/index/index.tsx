import { Ingredient } from "@/components/Ingredient";
import { Selected } from "@/components/Selected";
import { router } from "expo-router";
import { useState, useEffect } from "react";
import { Alert, ScrollView, Text, View } from "react-native";

import { services } from "@/services"

import { styles } from "./styles";

export default function Index() { // senha bd supabase BSX05zYyWRsKuG82
  const [selected, setSelected] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

  function handleToogleSelected(value: string) {
    if (selected.includes(value)) {
      return setSelected((state) => state.filter((item) => item !== value))
    }

    setSelected((state) => [...state, value])
  }

  function handleClearSelected() {
    Alert.alert("Limpar", "Deseja limpar tudo?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => setSelected([]) },
    ])
  }

  function handleSearch() {
    router.navigate("/recipes/" + selected)
  }

  useEffect(() => {
    services.ingredients.findAll().then(setIngredients)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha{"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>

      <Text style={styles.message}>
        Descubra as receitas baseadas nos produtos que você escolheu.
      </Text>

      <ScrollView contentContainerStyle={styles.containerScroll} showsVerticalScrollIndicator={false}>
        {ingredients.map((item) => (
          <Ingredient
            key={item.id}
            name={item.name}
            image={`${services.storage.imagePath}/${item.image}`}
            selected={selected.includes(item.id)}
            onPress={() => handleToogleSelected(item.id)}
          />
        ))}
      </ScrollView>

      {selected.length > 0 &&
        <Selected
        quantity={selected.length}
        onClear={handleClearSelected}
        onSearch={handleSearch}
      />}
    </View>
  )
}