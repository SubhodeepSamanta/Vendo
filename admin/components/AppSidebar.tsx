import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Home,
  Inbox,
  Plus,
  Projector,
  Search,
  Settings,
  Shirt,
  ShoppingCart,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import EditUser from "./EditUser";
import { Sheet, SheetTrigger } from "./ui/sheet";
import AddOrder from "./AddOrder";
import AddCategory from "./AddCategory";
import AddUser from "./AddUser";
import AddProduct from "./AddProduct";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/" className="flex items-center">
                <Image src="/logo.png" height={20} width={20} alt="logo" />
                <p>Vendo</p>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                  {item.title === "Inbox" && (
                    <SidebarMenuBadge>24</SidebarMenuBadge>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="flex flex-col gap-2">
          <SidebarGroupLabel>Products</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Link href="/products" className="flex items-center gap-4">
                  <Shirt  />
                  See all Products
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarMenuButton asChild>
            <Sheet>
              <SheetTrigger asChild>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Plus />
                    Add Product
                  </Link>
                </SidebarMenuButton>
              </SheetTrigger>
              <AddProduct />
            </Sheet>
          </SidebarMenuButton>
          <SidebarMenuButton asChild>
            <Sheet>
              <SheetTrigger asChild>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Plus />
                    Add Category
                  </Link>
                </SidebarMenuButton>
              </SheetTrigger>
              <AddCategory />
            </Sheet>
          </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup className="flex flex-col gap-2">
          <SidebarGroupLabel>Users</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Link href="/users" className="flex items-center gap-4">
                  <User className="h-5 w-5" />
                  See all Users
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarMenuButton asChild>
            <Sheet>
              <SheetTrigger asChild>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Plus />
                    Add User
                  </Link>
                </SidebarMenuButton>
              </SheetTrigger>
              <AddUser />
            </Sheet>
          </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup className="flex flex-col gap-2">
          <SidebarGroupLabel>Orders/Payments</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <Link href="/payments" className="flex items-center gap-4">
                  <ShoppingCart className="h-5 w-5" />
                  See all Transactions
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
          <SidebarMenuButton asChild>
            <Sheet>
              <SheetTrigger asChild>
                <SidebarMenuButton asChild>
                  <Link href="#">
                    <Plus />
                    Add Order
                  </Link>
                </SidebarMenuButton>
              </SheetTrigger>
              <AddOrder />
            </Sheet>
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User /> John Doe <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>SignOut</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
