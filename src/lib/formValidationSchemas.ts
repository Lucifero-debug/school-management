import { z } from "zod";

export const subjectSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  teachers: z.array(z.string()), //teacher ids
});

export type SubjectSchema = z.infer<typeof subjectSchema>;

export const classSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(1, { message: "Subject name is required!" }),
  capacity: z.coerce.number().min(1, { message: "Capacity name is required!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade name is required!" }),
  supervisorId: z.coerce.string().optional(),
});

export type ClassSchema = z.infer<typeof classSchema>;

export const teacherSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  subjects: z.array(z.string()).optional(), // subject ids
});

export type TeacherSchema = z.infer<typeof teacherSchema>;

export const studentSchema = z.object({
  id: z.string().optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
  name: z.string().min(1, { message: "First name is required!" }),
  surname: z.string().min(1, { message: "Last name is required!" }),
  email: z
    .string()
    .email({ message: "Invalid email address!" })
    .optional()
    .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  img: z.string().optional(),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.coerce.date({ message: "Birthday is required!" }),
  sex: z.enum(["MALE", "FEMALE"], { message: "Sex is required!" }),
  gradeId: z.coerce.number().min(1, { message: "Grade is required!" }),
  classId: z.coerce.number().min(1, { message: "Class is required!" }),
  parentId: z.string().min(1, { message: "Parent Id is required!" }),
});

export type StudentSchema = z.infer<typeof studentSchema>;

export const examSchema = z.object({
  id: z.coerce.number().optional(),
  title: z.string().min(1, { message: "Title name is required!" }),
  startTime: z.coerce.date({ message: "Start time is required!" }),
  endTime: z.coerce.date({ message: "End time is required!" }),
  lessonId: z.coerce.number({ message: "Lesson is required!" }),
});

export type ExamSchema = z.infer<typeof examSchema>;

export const assignmentSchema = z.object({
  title: z.string().min(1, { message: "Title name is required!" }),
dueDate: z.coerce.date({ message: "Start time is required!" }),
lessonId: z.coerce.number({ message: "Lesson is required!" }),
id: z.coerce.number().optional(),
});
export type AssignmentSchema = z.infer<typeof assignmentSchema>;

export const announcementSchema = z.object({
  title: z.string().min(1, { message: "Title name is required!" }),
  date: z.coerce.date({ message: "Start time is required!" }),
  classId: z.coerce.number({ message: "Class is required!" }),
  id: z.coerce.number().optional(),
  description:z.string().optional()
});
export type AnnouncementSchema = z.infer<typeof announcementSchema>;

export const eventSchema = z.object({
  title: z.string().min(1, { message: "Title name is required!" }),
  startTime: z.coerce.date({ message: "Start time is required!" }),
  endTime: z.coerce.date({ message: "End time is required!" }),
  classId: z.coerce.number({ message: "Class is required!" }),
  id: z.coerce.number().optional(),
  description:z.string().optional()
});
export type EventSchema = z.infer<typeof eventSchema>;

export const resultSchema = z.object({
  score: z.coerce.number({message:"Score is required"}),
  examId: z.coerce.number({ message: "Exam is required!" }),
  assignmentId: z.coerce.number({ message: "Assignment is required!" }),
  id: z.coerce.number().optional(),
  studentId: z.string().min(1, { message: "Student Id is required!" }),
});
export type ResultSchema = z.infer<typeof resultSchema>;


export const parentSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "name is required!" }),
  email: z
  .string()
  .email({ message: "Invalid email address!" })
  .optional()
  .or(z.literal("")),
  phone: z.string().optional(),
  address: z.string(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" })
    .optional()
    .or(z.literal("")),
    students: z.array(z.string()),
});

export type ParentSchema = z.infer<typeof parentSchema>;

export const lessonSchema = z.object({
  name: z.string({message:"Name is required"}),
  classId: z.coerce.number({ message: "Class is required!" }),
  subjectId: z.coerce.number({ message: "Subject is required!" }),
  id: z.coerce.number().optional(),
  teacherId: z.string().min(1, { message: "Teacher Id is required!" }),
  day: z.enum(["MONDAY", "TUESDAY","WEDNESDAY","THURSDAY","FRIDAY"], { message: "Day is required!" }),
  startTime: z.coerce.date({ message: "Start time is required!" }),
  endTime: z.coerce.date({ message: "End time is required!" }),
});
export type LessonSchema = z.infer<typeof lessonSchema>;