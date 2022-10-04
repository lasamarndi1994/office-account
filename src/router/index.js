import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import { useAuthStore, responseStore } from '@/stores';
import guest from "@/middleware/guest";
import auth from "@/middleware/auth";
import middlewarePipeline from '@/middleware/middlewarePipeline'



const router = createRouter({
	history: createWebHistory(
		import.meta.env.BASE_URL),
	routes: [{
		path: '/',
		name: 'home',
		meta: {
			middleware: [
				guest
			]
		},
		component: HomeView,

	},

	{
		path: '/login',
		name: 'login',
		meta: {
			middleware: [
				guest
			]
		},
		component: () =>
			import('../views/auth/Login.vue'),

	},
	{
		path: '/register',
		name: 'register',
		component: () =>
			import('../views/auth/Register.vue')
	},
	{
		path: '/forgot-password',
		name: 'forgot-password',
		component: () =>
			import('../views/auth/ForgotPassword.vue')
	},
	{
		path: '/auth/otp',
		name: 'otp',
		component: () =>
			import('../views/auth/OTP.vue')
	},
	{
		path: '/admin-dashboard',
		name: 'AdminDashboard',
		component: () =>
			import('../views/home/AdminDashboard.vue'),
		meta: {
			middleware: [
				auth
			]
		},
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		meta: {
			middleware: [
				auth
			]
		},
		component: () =>
			import('../views/home/Dashboard.vue'),

	},
	{
		path: "/app",
		name: "App",
		children: [
			{
				path: "contacts",
				name: "Contacts",
				component: () =>
					import('../views/app/Contact.vue'),

			},
			{
				path: "email-inbox",
				name: "EmailInbox",
				component: () =>
					import('../views/app/EmailInbox.vue'),

			},
			{
				path: "file-manager",
				name: "FileManger",
				component: () =>
					import('../views/app/FileManger.vue'),

			},

	]
},
	{
		path: '/employees',
		name: 'Employees',
		component: () =>
			import('../views/employee/Employee.vue')
	},
	{
		path: '/holidays',
		name: 'Holidays',
		component: () =>
			import('../views/employee/HolidayList.vue')
	},

	{
		path: '/leave-admin',
		name: 'LeaveAdmin',
		component: () =>
			import('../views/employee/LeaveAdmin.vue')
	},
	{
		path: '/leave-employee',
		name: 'LeaveEmployee',
		component: () =>
			import('../views/employee/LeaveEmployee.vue')
	},
	{
		path: '/leave-setting',
		name: 'LeaveSetting',
		component: () =>
			import('../views/employee/LeaveSetting.vue')
	},
	{
		path: '/attendance',
		name: 'AttendanceAdmin',
		component: () =>
			import('../views/employee/Attendance.vue')
	},
	{
		path: '/attendance-employee',
		name: 'AttendanceEmployee',
		component: () =>
			import('../views/employee/AttendanceEmployee.vue')
	},
	{
		path: '/departments',
		name: 'Department',
		component: () =>
			import('../views/employee/Department.vue')
	},
	{
		path: '/designations',
		name: 'Designation',
		component: () =>
			import('../views/employee/Designation.vue')
	},
	{
		path: '/timesheet',
		name: 'Timesheet',
		component: () =>
			import('../views/employee/Timesheet.vue')
	},
	{
		path: '/shift-scheduling',
		name: 'ShiftScheduling',
		component: () =>
			import('../views/employee/ShiftScheduling.vue')
	},
	{
		path: '/overtime',
		name: 'Overtime',
		component: () =>
			import('../views/employee/Overtime.vue')
	},
	{
		path: '/clients',
		name: 'Clients',
		component: () =>
			import('../views/client/Client.vue')
	},
	{
		path: '/client-lists',
		name: 'ClientList',
		component: () =>
			import('../views/client/ClientList.vue')
	},
	{
		path: '/client-lists',
		name: 'ClientList',
		component: () =>
			import('../views/client/ClientList.vue')
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () =>
			import('../views/project/Projects.vue')
	},

	{
		path: '/task-board',
		name: 'TaskBoard',
		component: () =>
			import('../views/project/TaskBoard.vue')
	},

	{
		path: '/project-view',
		name: 'ProjectView',
		component: () =>
			import('../views/project/ProjectView.vue')
	},
	{
		path: '/tickets',
		name: 'Ticket',
		component: () =>
			import('../views/ticket/Ticket.vue')
	},
	{
		path: '/estimates',
		name: 'Estimates',
		component: () =>
			import('../views/sales/Estimates.vue')
	},

	{
		path: '/estimate-create',
		name: 'EstimateCreate',
		component: () =>
			import('../views/sales/EstimateCreate.vue')
	},
	{
		path: '/invoices',
		name: 'Invoice',
		component: () =>
			import('../views/sales/Invoice.vue')
	},
	{
		path: '/create-invoice',
		name: 'CreateInvoice',
		component: () =>
			import('../views/sales/CreateInvoice.vue')
	},
	{
		path: '/payments',
		name: 'Payment',
		component: () =>
			import('../views/sales/Payment.vue')
	},
	{
		path: '/provident-fund',
		name: 'ProvidentFund',
		component: () =>
			import('../views/sales/ProvidentFund.vue')
	},
	{
		path: '/taxes',
		name: 'Taxes',
		component: () =>
			import('../views/sales/Taxes.vue')
	},
	{
		path: '/categories',
		name: 'Categories',
		component: () =>
			import('../views/accounting/Categories.vue')
	},
	{
		path: '/budgets',
		name: 'Budgets',
		component: () =>
			import('../views/accounting/Budgets.vue')
	},
	{
		path: '/budget-expenses',
		name: 'BudgetExpenses',
		component: () =>
			import('../views/accounting/BudgetExpenses.vue')
	},

	{
		path: '/budget-revenues',
		name: 'BudgetRevenue',
		component: () =>
			import('../views/accounting/BudgetRevenues.vue')
	},
	{
		path: '/salary',
		name: 'Salary',
		component: () =>
			import('../views/payroll/Salary.vue')
	},
	{
		path: '/salary-view',
		name: 'SalaryView',
		component: () =>
			import('../views/payroll/SalaryView.vue')
	},
	{
		path: '/payroll-items',
		name: 'PayrollItems',
		component: () =>
			import('../views/payroll/PayrollItems.vue')
	},

	{
		path: '/ExpenseReport',
		name: 'ExpenseReport',
		component: () =>
			import('../views/reports/ExpenseReport.vue')
	},

	{
		path: '/invoice',
		name: 'Invoice',
		component: () =>
			import('../views/reports/InvoiceReport.vue')
	},

	{
		path: '/payments',
		name: 'PaymentReport',
		component: () =>
			import('../views/reports/PaymentReport.vue')
	},

	{
		path: '/report/project',
		name: 'ProjectReport',
		component: () =>
			import('../views/reports/ProjectReport.vue')
	},

	{
		path: '/report/task',
		name: 'TaskReport',
		component: () =>
			import('../views/reports/TaskReport.vue')
	},

	{
		path: '/user-report',
		name: 'UserReport',
		component: () =>
			import('../views/reports/UserReport.vue')
	},
	{
		path: '/employee-report',
		name: 'EmployeeReport',
		component: () =>
			import('../views/reports/EmployeeReport.vue')
	},
	{
		path: '/payslip-report',
		name: 'PayslipReport',
		component: () =>
			import('../views/reports/PayslipReport.vue')
	},
	{

		path: '/addence-report',
		name: 'AttendanceReport',
		component: () =>
			import('../views/reports/AttendanceReport.vue')

	},
	{

		path: '/leave-report',
		name: 'LeaveReport',
		component: () =>
			import('../views/reports/LeaveReport.vue')

	},
	{

		path: '/daily-report',
		name: 'DailyReport',
		component: () =>
			import('../views/reports/DailyReport.vue')

	},
	{

		path: '/performance-indicator',
		name: 'PerformanceIndicator',
		component: () =>
			import('../views/perfomance/PerformanceIndicator.vue')

	},
	{

		path: '/performance-review',
		name: 'PerformanceReview',
		component: () =>
			import('../views/perfomance/PerformanceReview.vue')

	},
	{

		path: '/PerformanceAppraisal',
		name: 'PerformanceAppraisal',
		component: () =>
			import('../views/perfomance/PerformanceAppraisal.vue')

	},
	{

		path: '/goal-List',
		name: 'GoalList',
		component: () =>
			import('../views/goal/GoalList.vue')

	},
	{

		path: '/Goal-type',
		name: 'GoalType',
		component: () =>
			import('../views/goal/GoalType.vue')

	},
	{
		path: '/traing-list',
		name: 'TraningList',
		component: () =>
			import('../views/training/TraingList.vue')
	},
	{
		path: '/traing-list',
		name: 'TraningList',
		component: () =>
			import('../views/training/TraingList.vue')
	},
	{
		path: '/trainers',
		name: 'Trainers',
		component: () =>
			import('../views/training/Trainers.vue')
	},
	{

		path: '/traning-type',
		name: 'TraningType',
		component: () =>
			import('../views/training/TraningType.vue')
	},
	{
		path: '/policies',
		name: 'Policies',
		component: () =>
			import('../views/policies/Policies.vue')
	},
	{
		path: '/promotion',
		name: 'Promotion',
		component: () =>
			import('../views/promotion/Promotion.vue')
	},

	{
		path: '/resignation',
		name: 'Resignation',
		component: () =>
			import('../views/resignation/Resignation.vue')
	},
	{
		path: '/termination',
		name: 'Termination',
		component: () =>
			import('../views/termination/Termination.vue')
	},
	{
		path: '/assets',
		name: 'Assets',
		component: () =>
			import('../views/assets/Assets.vue')
	},
	{
		path: '/knowledgebase',
		name: 'Knowledgebase',
		component: () =>
			import('../views/knowledgebase/Knowledgebase.vue')
	},
	{
		path: '/activites',
		name: 'Activites',
		component: () =>
			import('../views/activites/Activites.vue')
	},
	{
		path: "/setting",
		name: "Setting",
		children: [
			{
				path: "company",
				name: "CompanySetting",
				component: () =>
					import('../views/setting/CompanySetting.vue')
			},
			{
				path: "localization",
				name: "LocalizationSetting",
				component: () =>
					import('../views/setting/LocalizationSetting.vue')
			},
			{
				path: "theme",
				name: "ThemeSetting",
				component: () =>
					import('../views/setting/ThemeSetting.vue')
			},
			{
				path: "role-permission",
				name: "RolePermissionSetting",
				component: () =>
					import('../views/setting/RolePermissionSetting.vue')
			},
			{
				path: "email",
				name: "EmailSetting",
				component: () =>
					import('../views/setting/EmailSetting.vue')
			},
			{
				path: "performance",
				name: "PerformanceSetting",
				component: () =>
					import('../views/setting/PerformanceSetting.vue')
			},
			{
				path: "approval",
				name: "ApprovalSetting",
				component: () =>
					import('../views/setting/ApprovalSetting.vue')
			},

			{
				path: "invoice",
				name: "InvoiceSetting",
				component: () =>
					import('../views/setting/InvoiceSetting.vue')
			},
			{
				path: "salary",
				name: "SalarySetting",
				component: () =>
					import('../views/setting/SalarySetting.vue')
			},
			{
				path: "notification",
				name: "NotificationSetting",
				component: () =>
					import('../views/setting/NotificationSetting.vue')
			},
			{
				path: "leave-type",
				name: "LeaveTypeSetting",
				component: () =>
					import('../views/setting/LeaveTypeSetting.vue')
			},

			{
				path: "text-box",
				name: "TextboxSetting",
				component: () =>
					import('../views/setting/TextboxSetting.vue')
			},
			{
				path: "CornSetting",
				name: "CornSetting",
				component: () =>
					import('../views/setting/CornSetting.vue')
			},
		]
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: () =>
			import('../views/error/NotFound.vue')
	},

	],
});
router.beforeEach((to, from, next) => {
	// const response = responseStore();
	// response.setResponse(true);

	if (!to.meta.middleware) {

		return next()
	}
	const middleware = to.meta.middleware
	const store = useAuthStore();


	const context = {
		to,
		from,
		next,
		store
	}
	return middleware[0]({
		...context,
		next: middlewarePipeline(context, middleware, 1)
	})
})




export default router