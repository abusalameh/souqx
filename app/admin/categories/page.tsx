'use client'

import { useState } from 'react'
import { AdminLayout } from '@/components/admin-layout'
import { Heading, Subheading } from '@/components/ui/heading'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Fieldset, Legend, FieldGroup, Field, Label, Description, ErrorMessage } from '@/components/ui/fieldset'
import { PlusIcon, PencilIcon, TrashIcon, MagnifyingGlassIcon, TagIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/16/solid'

// Mock data for categories
const mockCategories = [
  {
    id: 1,
    name: 'الإلكترونيات',
    description: 'أجهزة إلكترونية ومعدات تقنية',
    status: 'active',
    productsCount: 45,
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'الملابس والأزياء',
    description: 'ملابس رجالية ونسائية وأطفال',
    status: 'active',
    productsCount: 128,
    createdAt: '2024-01-10',
  },
  {
    id: 3,
    name: 'المنزل والحديقة',
    description: 'أثاث ومستلزمات منزلية وحدائق',
    status: 'active',
    productsCount: 67,
    createdAt: '2024-01-08',
  },
  {
    id: 4,
    name: 'الرياضة واللياقة',
    description: 'معدات رياضية ومستلزمات اللياقة البدنية',
    status: 'inactive',
    productsCount: 23,
    createdAt: '2024-01-05',
  },
]

export default function CategoriesPage() {
  const [categories, setCategories] = useState(mockCategories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'active',
  })

  const [errors, setErrors] = useState<any>({})

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || category.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    const newErrors: any = {}
    if (!formData.name.trim()) newErrors.name = 'اسم التصنيف مطلوب'
    if (!formData.description.trim()) newErrors.description = 'وصف التصنيف مطلوب'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (editingCategory) {
      // Update existing category
      setCategories(categories.map(category => 
        category.id === editingCategory.id 
          ? { ...category, ...formData }
          : category
      ))
    } else {
      // Add new category
      const newCategory = {
        id: Math.max(...categories.map(c => c.id)) + 1,
        ...formData,
        productsCount: 0,
        createdAt: new Date().toISOString().split('T')[0],
      }
      setCategories([...categories, newCategory])
    }

    // Reset form
    setFormData({
      name: '',
      description: '',
      status: 'active',
    })
    setErrors({})
    setIsModalOpen(false)
    setEditingCategory(null)
  }

  const handleEdit = (category: any) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      description: category.description,
      status: category.status,
    })
    setIsModalOpen(true)
  }

  const handleDelete = (categoryId: number) => {
    const category = categories.find(c => c.id === categoryId)
    if (category && category.productsCount > 0) {
      alert('لا يمكن حذف تصنيف يحتوي على منتجات. يرجى نقل المنتجات أولاً.')
      return
    }
    
    if (confirm('هل أنت متأكد من حذف هذا التصنيف؟')) {
      setCategories(categories.filter(category => category.id !== categoryId))
    }
  }

  const toggleStatus = (categoryId: number) => {
    setCategories(categories.map(category => 
      category.id === categoryId 
        ? { ...category, status: category.status === 'active' ? 'inactive' : 'active' }
        : category
    ))
  }

  const openAddModal = () => {
    setEditingCategory(null)
    setFormData({
      name: '',
      description: '',
      status: 'active',
    })
    setErrors({})
    setIsModalOpen(true)
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Heading>إدارة التصنيفات</Heading>
            <Subheading>إدارة تصنيفات المنتجات والخدمات</Subheading>
          </div>
          <Button onClick={openAddModal} className="flex items-center gap-2">
            <PlusIcon className="w-4 h-4" />
            إضافة تصنيف جديد
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field>
              <Label>البحث</Label>
              <div className="relative mt-2">
                <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input
                  type="text"
                  placeholder="البحث بالاسم أو الوصف..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
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

        {/* Categories Table */}
        <div className="bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>التصنيف</TableHeader>
                <TableHeader>الوصف</TableHeader>
                <TableHeader>عدد المنتجات</TableHeader>
                <TableHeader>الحالة</TableHeader>
                <TableHeader>تاريخ الإنشاء</TableHeader>
                <TableHeader>الإجراءات</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <TagIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-zinc-600 dark:text-zinc-400">{category.description}</span>
                  </TableCell>
                  <TableCell>
                    <Badge color="blue">{category.productsCount} منتج</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge color={category.status === 'active' ? 'green' : 'red'}>
                      {category.status === 'active' ? 'نشط' : 'غير نشط'}
                    </Badge>
                  </TableCell>
                  <TableCell>{category.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        plain
                        onClick={() => toggleStatus(category.id)}
                        className="p-1"
                        title={category.status === 'active' ? 'إخفاء' : 'إظهار'}
                      >
                        {category.status === 'active' ? (
                          <EyeSlashIcon className="w-4 h-4" />
                        ) : (
                          <EyeIcon className="w-4 h-4" />
                        )}
                      </Button>
                      <Button
                        plain
                        onClick={() => handleEdit(category)}
                        className="p-1"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </Button>
                      <Button
                        plain
                        onClick={() => handleDelete(category.id)}
                        className="p-1 text-red-600 hover:text-red-700"
                        disabled={category.productsCount > 0}
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

        {/* Add/Edit Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-zinc-900 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {editingCategory ? 'تعديل التصنيف' : 'إضافة تصنيف جديد'}
                </h3>
                
                <form onSubmit={handleSubmit}>
                  <Fieldset>
                    <FieldGroup>
                      <Field>
                        <Label>اسم التصنيف</Label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="أدخل اسم التصنيف"
                        />
                        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
                      </Field>

                      <Field>
                        <Label>وصف التصنيف</Label>
                        <Textarea
                          value={formData.description}
                          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                          placeholder="أدخل وصف التصنيف"
                          rows={3}
                        />
                        {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
                      </Field>

                      <Field>
                        <Label>الحالة</Label>
                        <Select
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        >
                          <option value="active">نشط</option>
                          <option value="inactive">غير نشط</option>
                        </Select>
                        <Description>
                          التصنيفات غير النشطة لن تظهر للعملاء
                        </Description>
                      </Field>
                    </FieldGroup>
                  </Fieldset>

                  <div className="flex justify-end gap-3 mt-6">
                    <Button
                      type="button"
                      plain
                      onClick={() => setIsModalOpen(false)}
                    >
                      إلغاء
                    </Button>
                    <Button type="submit">
                      {editingCategory ? 'تحديث' : 'إضافة'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  )
}