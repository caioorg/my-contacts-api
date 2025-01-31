const categoryRepository = require("./category.repository");

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await categoryRepository.findAll(orderBy);
    return response.json(categories);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) return response.status(400).json({ error: "Name is required" });

    const category = await categoryRepository.create({ name });
    return response.json(category);
  }
}

module.exports = new CategoryController();
