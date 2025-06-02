import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GameFeatures = () => {
  const features = [
    {
      icon: "Zap",
      title: "Мгновенные сражения",
      description:
        "Быстрые 5-минутные бои с игроками со всего мира. Никаких очередей, только чистый адреналин!",
    },
    {
      icon: "Shield",
      title: "Уникальные танки",
      description:
        "Более 50 видов танков с различными характеристиками. Собирай, улучшай и доминируй!",
    },
    {
      icon: "Target",
      title: "Турниры и рейтинги",
      description:
        "Соревнуйся в турнирах, поднимайся в рейтинге и получай эксклюзивные награды.",
    },
    {
      icon: "Users",
      title: "Командная игра",
      description:
        "Создавай кланы, сражайся в команде и завоевывай территории вместе с друзьями.",
    },
    {
      icon: "Gamepad2",
      title: "Простое управление",
      description:
        "Интуитивное управление, которое освоит каждый. Играй с клавиатуры или геймпада.",
    },
    {
      icon: "Trophy",
      title: "Система наград",
      description:
        "Ежедневные задания, достижения и награды. Всегда есть цель для достижения!",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ПОЧЕМУ ВЫБИРАЮТ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              ТАНКИ ОНЛАЙН
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Игра, которая покорила сердца миллионов танкистов по всему миру
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                  <Icon name={feature.icon} size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;
