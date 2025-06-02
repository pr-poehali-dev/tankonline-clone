import { Button } from "@/components/ui/button";

const LoginForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-normal text-gray-800 mb-2">
          Вход ВКонтакте
        </h2>
        <p className="text-gray-600 text-sm">Добро пожаловать!</p>
      </div>

      <form className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Электронная почта"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Пароль"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
          />
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-sm font-normal">
          Войти
        </Button>
      </form>

      <div className="mt-4 text-center space-y-2">
        <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
          Забыли пароль?
        </a>
        <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">
          Регистрация
        </a>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-500">
          Социальная сеть ВКонтакте: музыка, фильмы, игры, сообщества
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
