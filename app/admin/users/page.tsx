"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Fieldset,
  Legend,
  FieldGroup,
  Field,
  Label,
  Description,
  ErrorMessage,
} from "@/components/ui/fieldset";
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogActions,
} from "@/components/ui/dialog";
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/16/solid";

// Mock data for users
const mockUsers = [
  {
    id: 1,
    name: "أحمد محمد",
    email: "ahmed@example.com",
    phone: "+966501234567",
    role: "customer",
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "فاطمة علي",
    email: "fatima@example.com",
    phone: "+966507654321",
    role: "business_owner",
    status: "active",
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    name: "محمد السعيد",
    email: "mohammed@example.com",
    phone: "+966509876543",
    role: "customer",
    status: "inactive",
    createdAt: "2024-01-05",
  },
];

export default function UsersPage() {
  const [users, setUsers] = useState(mockUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "customer",
    status: "active",
  });

  const [errors, setErrors] = useState<any>({});

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesStatus =
      filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!formData.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (editingUser) {
      // Update existing user
      setUsers(
        users.map((user) =>
          user.id === editingUser.id ? { ...user, ...formData } : user
        )
      );
    } else {
      // Add new user
      const newUser = {
        id: Math.max(...users.map((u) => u.id)) + 1,
        ...formData,
        createdAt: new Date().toISOString().split("T")[0],
      };
      setUsers([...users, newUser]);
    }

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "customer",
      status: "active",
    });
    setErrors({});
    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleEdit = (user: any) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      status: user.status,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (userId: number) => {
    if (confirm("هل أنت متأكد من حذف هذا المستخدم؟")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const openAddModal = () => {
    setEditingUser(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      role: "customer",
      status: "active",
    });
    setErrors({});
    setIsModalOpen(true);
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Heading>إدارة المستخدمين</Heading>
            <Subheading>إدارة حسابات المستخدمين وأصحاب الأعمال</Subheading>
          </div>
          <Button onClick={openAddModal} className="flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            إضافة مستخدم جديد
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field>
              <Label>البحث</Label>
              <div className="relative mt-2">
                <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input
                  type="text"
                  placeholder="البحث بالاسم أو البريد الإلكتروني..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </Field>
            <Field>
              <Label>نوع المستخدم</Label>
              <Select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="mt-2"
              >
                <option value="all">جميع الأنواع</option>
                <option value="customer">عميل</option>
                <option value="business_owner">صاحب عمل</option>
                <option value="admin">مدير</option>
              </Select>
            </Field>
            <Field>
              <Label>الحالة</Label>
              <Select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="mt-2"
              >
                <option value="all">جميع الحالات</option>
                <option value="active">نشط</option>
                <option value="inactive">غير نشط</option>
              </Select>
            </Field>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>المستخدم</TableHead>
                <TableHead>البريد الإلكتروني</TableHead>
                <TableHead>رقم الهاتف</TableHead>
                <TableHead>النوع</TableHead>
                <TableHead>الحالة</TableHead>
                <TableHead>تاريخ التسجيل</TableHead>
                <TableHead>الإجراءات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <UserIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <EnvelopeIcon className="w-4 h-4 text-zinc-400" />
                      {user.email}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <PhoneIcon className="w-4 h-4 text-zinc-400" />
                      {user.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      color={
                        user.role === "business_owner"
                          ? "blue"
                          : user.role === "admin"
                          ? "purple"
                          : "zinc"
                      }
                    >
                      {user.role === "customer"
                        ? "عميل"
                        : user.role === "business_owner"
                        ? "صاحب عمل"
                        : "مدير"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge color={user.status === "active" ? "green" : "red"}>
                      {user.status === "active" ? "نشط" : "غير نشط"}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        plain
                        onClick={() => handleEdit(user)}
                        className="p-1"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </Button>
                      <Button
                        plain
                        onClick={() => handleDelete(user.id)}
                        className="p-1 text-red-600 hover:text-red-700"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Add/Edit Dialog */}
        <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} size="md">
          <DialogTitle>
            {editingUser ? "تعديل المستخدم" : "إضافة مستخدم جديد"}
          </DialogTitle>

          <DialogBody>
            <form onSubmit={handleSubmit}>
              <Fieldset>
                <FieldGroup>
                  <Field>
                    <Label>الاسم الكامل</Label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="أدخل الاسم الكامل"
                    />
                    {errors.name && (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    )}
                  </Field>

                  <Field>
                    <Label>البريد الإلكتروني</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="أدخل البريد الإلكتروني"
                    />
                    {errors.email && (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                  </Field>

                  <Field>
                    <Label>رقم الهاتف</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="أدخل رقم الهاتف"
                    />
                    {errors.phone && (
                      <ErrorMessage>{errors.phone}</ErrorMessage>
                    )}
                  </Field>

                  <Field>
                    <Label>نوع المستخدم</Label>
                    <Select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                    >
                      <option value="customer">عميل</option>
                      <option value="business_owner">صاحب عمل</option>
                      <option value="admin">مدير</option>
                    </Select>
                  </Field>

                  <Field>
                    <Label>الحالة</Label>
                    <Select
                      value={formData.status}
                      onChange={(e) =>
                        setFormData({ ...formData, status: e.target.value })
                      }
                    >
                      <option value="active">نشط</option>
                      <option value="inactive">غير نشط</option>
                    </Select>
                  </Field>
                </FieldGroup>
              </Fieldset>

              <DialogActions>
                <Button
                  type="button"
                  plain
                  onClick={() => setIsModalOpen(false)}
                >
                  إلغاء
                </Button>
                <Button type="submit">
                  {editingUser ? "تحديث" : "إضافة"}
                </Button>
              </DialogActions>
            </form>
          </DialogBody>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
