import VKHeader from "@/components/VKHeader";
import LoginForm from "@/components/LoginForm";
import VKFooter from "@/components/VKFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 font-sans">
      <VKHeader />
      <div className="flex justify-center items-center min-h-[calc(100vh-120px)] px-4">
        <LoginForm />
      </div>
      <VKFooter />
    </div>
  );
};

export default Index;
