import OpxenHeader from "@/components/OpxenHeader";
import LoginForm from "@/components/LoginForm";
import OpxenFooter from "@/components/OpxenFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] font-sans">
      <OpxenHeader />
      <div className="flex justify-center items-center min-h-[calc(100vh-120px)] px-4">
        <LoginForm />
      </div>
      <OpxenFooter />
    </div>
  );
};

export default Index;
