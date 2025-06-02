import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NewsSection = () => {
  const news = [
    {
      date: "15 МАЯ 2024",
      title: "Новое обновление: Золотые ящики",
      description:
        "Открывай золотые ящики и получай эксклюзивные танки! Новая система наград уже доступна.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      tag: "ОБНОВЛЕНИЕ",
    },
    {
      date: "10 МАЯ 2024",
      title: "Турнир Летних Побед",
      description:
        "Грандиозный турнир с призовым фондом 100,000₽! Регистрация открыта до 20 мая.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      tag: "ТУРНИР",
    },
    {
      date: "5 МАЯ 2024",
      title: "Новая карта: Городские руины",
      description:
        "Исследуй разрушенный мегаполис в новой карте с уникальными укрытиями и тактическими позициями.",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      tag: "КОНТЕНТ",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ПОСЛЕДНИЕ
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              НОВОСТИ
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Следи за обновлениями и не пропускай важные события
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((article, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {article.tag}
                </div>
              </div>

              <CardHeader>
                <div className="text-sm text-gray-400 mb-2">{article.date}</div>
                <CardTitle className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-300 leading-relaxed mb-4">
                  {article.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className="text-blue-400 hover:text-white hover:bg-blue-500/20 p-0"
                >
                  Читать полностью
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
          >
            <Icon name="Newspaper" className="mr-2" />
            ВСЕ НОВОСТИ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
