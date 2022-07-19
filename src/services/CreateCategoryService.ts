import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const categoriesRepository = new CategoriesRepository();

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error(`Category ${name} already exists`);
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
