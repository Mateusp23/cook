import { StyleSheet } from "react-native";
import { theme } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    paddingHorizontal: 32,
    paddingTop: 62,
    marginBottom: 12,
  },
  header: {
    marginBottom: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
  },
  recipes: {
    padding: 32,
  },
  recipesContent: {
    gap: 16,
  }
});