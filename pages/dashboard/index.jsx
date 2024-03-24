import { useRouter } from "next/navigation";
import Navigation from "@/components/Navigation";
import RecentSpends from "@/components/RecentSpends";

import UserData from "../../userData.json";

import Balance from "@/components/Balance";
import AddExpense from "@/components/AddExpense";
import UserDetails from "@/components/UserDetails";

const Dashboard = () => {
  const router = useRouter();
  const { logicPassword, magicPassword } = UserData;

  // redirect the user to homepage when both logic and magic password are not set
  if (!logicPassword && !magicPassword) {
    router.push("/");
  }

  return (
    <>
      <UserDetails />
      <Balance />
      <AddExpense />
      <RecentSpends />
      <Navigation />
    </>
  );
};

export default Dashboard;
