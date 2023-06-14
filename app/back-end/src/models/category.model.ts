import { EndpointRequest } from '../types';
import connection from './db/connection';
import getQueryRecipes from '../utils/querys';

const getAllCategories = async (url: EndpointRequest) => {
  console.log(
    process.env.DB_HOST,
    process.env.DB_USER,
    process.env.DB_PORT,
    process.env.MYSQL_ROOT_PASSWORD,
    process.env.DB_PASS,
    process.env.MYSQL_DATABASE,
    process.env.PORT,
  )
  let query;
  if (url === '/drinks') {
    query = 'SELECT * FROM drinks_categories'
  } else {
    query = 'SELECT * FROM meals_categories'
  }
  const [categories] = await connection.execute(query);
  return categories;
};

const getByCategory = async (url: EndpointRequest, q: string) => {
  let query;
  if (url === '/drinks') {
    query = getQueryRecipes.getDrinkByCategory;
  } else {
    query = getQueryRecipes.getMealByCategory;
  }
  const [category] = await connection.execute(query, [q]);
  return category;
};

export default { getAllCategories, getByCategory };