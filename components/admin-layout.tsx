"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarLayout } from "@/components/ui/sidebar-layout";
import {
  Navbar,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarHeading,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
} from "@/components/ui/sidebar";
import { Avatar } from "@/components/ui/avatar";
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/ui/dropdown";
import {
  HomeIcon,
  UsersIcon,
  BuildingStorefrontIcon,
  CubeIcon,
  TagIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ArrowRightEndOnRectangleIcon,
  UserCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/16/solid";

function AccountDropdownMenu({
  anchor,
}: {
  anchor: "top start" | "bottom end";
}) {
  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      <DropdownItem href="#">
        <UserCircleIcon />
        <DropdownLabel>الملف الشخصي</DropdownLabel>
      </DropdownItem>
      <DropdownItem href="#">
        <Cog6ToothIcon />
        <DropdownLabel>الإعدادات</DropdownLabel>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem href="#">
        <ArrowRightEndOnRectangleIcon />
        <DropdownLabel>تسجيل الخروج</DropdownLabel>
      </DropdownItem>
    </DropdownMenu>
  );
}

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  square
                />
              </DropdownButton>
              <AccountDropdownMenu anchor="bottom end" />
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                <BuildingStorefrontIcon className="h-5 w-5 text-white" />
              </div>
              <SidebarLabel className="text-lg font-semibold">
                إكس سوق
              </SidebarLabel>
            </div>
          </SidebarHeader>

          <SidebarBody>
            <SidebarSection>
              <SidebarItem href="/admin" current={pathname === "/admin"}>
                <HomeIcon />
                <SidebarLabel>لوحة التحكم</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/admin/users"
                current={pathname.startsWith("/admin/users")}
              >
                <UsersIcon />
                <SidebarLabel>المستخدمين</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/admin/businesses"
                current={pathname.startsWith("/admin/businesses")}
              >
                <BuildingStorefrontIcon />
                <SidebarLabel>المتاجر</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/admin/products"
                current={pathname.startsWith("/admin/products")}
              >
                <CubeIcon />
                <SidebarLabel>المنتجات</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/admin/categories"
                current={pathname.startsWith("/admin/categories")}
              >
                <TagIcon />
                <SidebarLabel>التصنيفات</SidebarLabel>
              </SidebarItem>
            </SidebarSection>

            <SidebarSection>
              <SidebarHeading>أدوات إضافية</SidebarHeading>
              <SidebarItem
                href="/admin/form-demo"
                current={pathname === "/admin/form-demo"}
              >
                <DocumentTextIcon />
                <SidebarLabel>نموذج النماذج</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="#" current={false}>
                <ChartBarIcon />
                <SidebarLabel>التقارير</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="#" current={false}>
                <Cog6ToothIcon />
                <SidebarLabel>الإعدادات</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>

          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                  <Avatar
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="size-10"
                    square
                    alt=""
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                      المدير
                    </span>
                    <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                      admin@xsouq.com
                    </span>
                  </span>
                </span>
              </DropdownButton>
              <AccountDropdownMenu anchor="top start" />
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}
