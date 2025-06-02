import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const LoginForm = () => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl border border-[#333] p-8 w-full max-w-[400px] shadow-2xl">
      <div className="text-center mb-8">
        <div className="mb-6">
          <div className="w-16 h-16 bg-[#ff6b35] rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">O</span>
          </div>
          <h1 className="text-white text-2xl font-bold mb-1">OPXEN</h1>
          <p className="text-[#888] text-sm">Игровая платформа</p>
        </div>
        <h2 className="text-white text-xl font-semibold mb-2">
          Вход в аккаунт
        </h2>
      </div>

      <form className="space-y-5">
        <div>
          <label className="block text-[#ccc] text-sm font-medium mb-2">
            Логин или Email
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#444] rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] text-white placeholder-[#666] transition-all"
              placeholder="Введите логин или email"
            />
            <Icon
              name="User"
              className="absolute right-3 top-3.5 text-[#666]"
              size={18}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ccc] text-sm font-medium mb-2">
            Пароль
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full px-4 py-3 bg-[#2a2a2a] border border-[#444] rounded-lg focus:outline-none focus:border-[#ff6b35] focus:ring-1 focus:ring-[#ff6b35] text-white placeholder-[#666] transition-all"
              placeholder="Введите пароль"
            />
            <Icon
              name="Lock"
              className="absolute right-3 top-3.5 text-[#666]"
              size={18}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 text-[#ff6b35] bg-[#2a2a2a] border-[#444] rounded focus:ring-[#ff6b35] focus:ring-2"
            />
            <span className="ml-2 text-[#ccc]">Запомнить меня</span>
          </label>
          <a
            href="#"
            className="text-[#ff6b35] hover:text-[#ff8c5a] transition-colors"
          >
            Забыли пароль?
          </a>
        </div>

        <Button className="w-full bg-[#ff6b35] hover:bg-[#ff5722] text-white py-3 font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg">
          Войти в аккаунт
        </Button>
      </form>

      <div className="mt-8 text-center">
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-[#333]"></div>
          <span className="px-4 text-[#666] text-sm">или</span>
          <div className="flex-1 h-px bg-[#333]"></div>
        </div>

        <p className="text-[#888] text-sm">
          Нет аккаунта?{" "}
          <a
            href="#"
            className="text-[#ff6b35] hover:text-[#ff8c5a] font-medium transition-colors"
          >
            Создать аккаунт
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
