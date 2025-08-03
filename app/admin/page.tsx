"use client";

import Link from "next/link";
import { AdminLayout } from "@/components/admin-layout";
import { Heading, Subheading } from "@/components/ui/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import {
  ShoppingBagIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  EyeIcon,
  PencilIcon,
  BuildingStorefrontIcon,
  CubeIcon,
  TagIcon,
  UsersIcon,
  ArrowRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

// Mock data for demonstration
const stats = [
  {
    name: "إجمالي المبيعات",
    value: "125,000 ر.س",
    icon: CurrencyDollarIcon,
    change: "+12%",
    changeType: "positive",
  },
  {
    name: "الطلبات الجديدة",
    value: "48",
    icon: ShoppingBagIcon,
    change: "+8%",
    changeType: "positive",
  },
  {
    name: "العملاء النشطين",
    value: "1,234",
    icon: UserGroupIcon,
    change: "+5%",
    changeType: "positive",
  },
  {
    name: "معدل التحويل",
    value: "3.2%",
    icon: ChartBarIcon,
    change: "-2%",
    changeType: "negative",
  },
];

const recentOrders = [
  {
    id: "1001",
    customer: "أحمد محمد",
    product: "هاتف ذكي",
    amount: "2,500 ر.س",
    status: "مكتمل",
    date: "2024-01-15",
  },
  {
    id: "1002",
    customer: "فاطمة علي",
    product: "لابتوب",
    amount: "4,200 ر.س",
    status: "قيد المعالجة",
    date: "2024-01-15",
  },
  {
    id: "1003",
    customer: "محمد سالم",
    product: "ساعة ذكية",
    amount: "800 ر.س",
    status: "مشحون",
    date: "2024-01-14",
  },
  {
    id: "1004",
    customer: "نورا خالد",
    product: "سماعات",
    amount: "350 ر.س",
    status: "ملغي",
    date: "2024-01-14",
  },
  {
    id: "1005",
    customer: "عبدالله أحمد",
    product: "كاميرا",
    amount: "1,800 ر.س",
    status: "مكتمل",
    date: "2024-01-13",
  },
];

function StatCard({ stat }: { stat: (typeof stats)[0] }) {
  return (
    <div className="bg-white dark:bg-zinc-900 overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
          </div>
          <div className="mr-5 w-0 flex-1 rtl:mr-0 rtl:ml-5">
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                {stat.name}
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
                <div
                  className={`mr-2 flex items-baseline text-sm font-semibold rtl:mr-0 rtl:ml-2 ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function getStatusBadge(status: string) {
  switch (status) {
    case "مكتمل":
      return <Badge color="green">{status}</Badge>;
    case "قيد المعالجة":
      return <Badge color="yellow">{status}</Badge>;
    case "مشحون":
      return <Badge color="blue">{status}</Badge>;
    case "ملغي":
      return <Badge color="red">{status}</Badge>;
    default:
      return <Badge color="zinc">{status}</Badge>;
  }
}

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <Heading>لوحة التحكم الإدارية</Heading>
          <Subheading>مرحباً بك في نظام إدارة المتجر الإلكتروني</Subheading>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/admin/users"
            className="group relative rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <span className="rounded-lg inline-flex p-3 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 ring-4 ring-white dark:ring-zinc-900">
                <UsersIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                إدارة المستخدمين
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                عرض وإدارة جميع المستخدمين في النظام
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 dark:text-zinc-600 group-hover:text-gray-400 dark:group-hover:text-zinc-500"
              aria-hidden="true"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </span>
          </Link>

          <Link
            href="/admin/businesses"
            className="group relative rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <span className="rounded-lg inline-flex p-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 ring-4 ring-white dark:ring-zinc-900">
                <BuildingStorefrontIcon
                  className="h-6 w-6"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                أصحاب الأعمال
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                إدارة أصحاب الأعمال والمتاجر
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 dark:text-zinc-600 group-hover:text-gray-400 dark:group-hover:text-zinc-500"
              aria-hidden="true"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </span>
          </Link>

          <Link
            href="/admin/categories"
            className="group relative rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <span className="rounded-lg inline-flex p-3 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 ring-4 ring-white dark:ring-zinc-900">
                <TagIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                الفئات
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                إدارة فئات المنتجات والخدمات
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 dark:text-zinc-600 group-hover:text-gray-400 dark:group-hover:text-zinc-500"
              aria-hidden="true"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </span>
          </Link>

          <Link
            href="/admin/products"
            className="group relative rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div>
              <span className="rounded-lg inline-flex p-3 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 ring-4 ring-white dark:ring-zinc-900">
                <CubeIcon className="h-6 w-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                <span className="absolute inset-0" aria-hidden="true" />
                المنتجات
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                إدارة المنتجات والمخزون
              </p>
            </div>
            <span
              className="pointer-events-none absolute right-6 top-6 text-gray-300 dark:text-zinc-600 group-hover:text-gray-400 dark:group-hover:text-zinc-500"
              aria-hidden="true"
            >
              <ArrowRightIcon className="h-6 w-6" />
            </span>
          </Link>
        </div>

        {/* Form Demo */}
        <div className="mt-8">
          <Heading level={2}>مكونات النماذج</Heading>
          <div className="mt-4">
            <Link
              href="/admin/form-demo"
              className="group relative rounded-lg border border-gray-200 dark:border-zinc-700 p-6 hover:border-gray-300 dark:hover:border-zinc-600 transition-colors block"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    نموذج تخطيط النماذج
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                    مثال شامل على تخطيط النماذج مع دعم RTL والمكونات المخصصة
                  </p>
                </div>
                <span
                  className="text-gray-300 dark:text-zinc-600 group-hover:text-gray-400 dark:group-hover:text-zinc-500"
                  aria-hidden="true"
                >
                  <ArrowRightIcon className="h-6 w-6" />
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.name} stat={stat} />
          ))}
        </div>

        {/* Recent Orders */}
        <div className="bg-white dark:bg-zinc-900 shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <Heading level={2}>الطلبات الأخيرة</Heading>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Select className="w-40">
                  <option>جميع الطلبات</option>
                  <option>مكتملة</option>
                  <option>قيد المعالجة</option>
                  <option>مشحونة</option>
                </Select>
                <Button href="/admin/orders">عرض الكل</Button>
              </div>
            </div>

            <Table>
              <TableHead>
                <TableRow>
                  <TableHeader>رقم الطلب</TableHeader>
                  <TableHeader>العميل</TableHeader>
                  <TableHeader>المنتج</TableHeader>
                  <TableHeader>المبلغ</TableHeader>
                  <TableHeader>الحالة</TableHeader>
                  <TableHeader>التاريخ</TableHeader>
                  <TableHeader>الإجراءات</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">#{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <Button plain className="p-1">
                          <EyeIcon className="h-4 w-4" />
                        </Button>
                        <Button plain className="p-1">
                          <PencilIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
