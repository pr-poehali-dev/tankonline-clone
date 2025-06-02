import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider">
          ТАНКИ
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            ОНЛАЙН
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Самая захватывающая онлайн битва танков! Присоединяйся к миллионам
          игроков по всему миру.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105"
          >
            <Icon name="Play" className="mr-2" />
            ИГРАТЬ СЕЙЧАС
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
          >
            <Icon name="Download" className="mr-2" />
            СКАЧАТЬ ИГРУ
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
            <div className="text-2xl font-bold text-green-400">2M+</div>
            <div className="text-gray-300">Активных игроков</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
            <div className="text-2xl font-bold text-orange-400">50+</div>
            <div className="text-gray-300">Видов танков</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
            <div className="text-2xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-300">Онлайн сражения</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
