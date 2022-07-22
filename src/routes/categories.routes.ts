import { Router } from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/UseCases/createCategory";
import { importCategoryController } from "../modules/cars/UseCases/importCategory";
import { listCategoriesController } from "../modules/cars/UseCases/listCategories";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
  return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
  return importCategoryController.handle(req, res);
})

export { categoriesRoutes };
