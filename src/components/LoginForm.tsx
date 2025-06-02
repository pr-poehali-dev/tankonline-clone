import { Button } from "@/components/ui/button";

const LoginForm = () => {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Вход в аккаунт
        </h2>
        <p className="text-gray-400 text-sm">Добро пожаловать в OPXEN</p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Логин или Email
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-gray-600 text-white placeholder-gray-400 transition-colors"
            placeholder="Введите логин или email"
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">
            Пароль
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-gray-600 text-white placeholder-gray-400 transition-colors"
            placeholder="Введите пароль"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-300">Запомнить меня</span>
          </label>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            Забыли пароль?
          </a>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-medium transition-colors">
          Войти
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-400 text-sm">
          Нет аккаунта?{" "}
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Зарегистрироваться
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
