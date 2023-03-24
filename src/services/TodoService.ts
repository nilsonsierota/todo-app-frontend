import { Api } from '../providers';
import { ITodo } from '../interfaces';

const getAll = () => Api.get<ITodo[]>('/v1/todos');

export const TodoService = {
  getAll,
};
