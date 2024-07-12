import { AuthContext } from "@/context/AuthContext";
import { Navdata } from "@/staticData/userData";
import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const Header = () => {
  const router = useRouter();
  const { handleSignOut } = useContext(AuthContext);
  return (
    <div id="navHeader">
      <div className="fixed top-0 flex justify-center w-full z-50 bg-white ">
        <div className="bg-black p-4 w-full text-white rounded-3xl h-auto md:h-[82px] flex flex-col md:flex-row justify-between items-center md:mt-0 ">
          <div className="text-lg font-semibold ml-10">
            SRC-2024 Team Dashboard
          </div>

          <div className="w-full sm:w-[70%] md:w-[50%]">
            <div className="grid grid-cols-4 gap-x-2">
              {Navdata.map((event, index) => (
                <Link key={index} href={`/dashboard/${event.uri}`}>
                  <Button className="flex justify-center text-base items-center py-1 px-3 bg-gray-800 text-white hover:bg-gray-700">
                    {event.route}
                  </Button>
                </Link>
              ))}
              <Button
                color="failure"
                className="py-1"
                onClick={() => {
                  handleSignOut();
                  router.push("/");
                }}
              >
                logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
