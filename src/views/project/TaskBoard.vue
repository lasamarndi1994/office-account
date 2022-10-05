<template>
	<div class="content container-fluid">
	  <div class="page-header">
		<div class="row">
		  <div class="col-sm-12">
			<h3 class="page-title">Hospital Admin</h3>
			<ul class="breadcrumb">
			  <li class="breadcrumb-item">
				<a href="admin-dashboard.html">Dashboard</a>
			  </li>
			  <li class="breadcrumb-item active">Task Board</li>
			</ul>
		  </div>
		</div>
	  </div>
	  <div class="row board-view-header">
		<div class="col-4">
		  <div class="pro-teams">
			<div class="pro-team-lead">
			  <h4>Lead</h4>
			  <div class="avatar-group">
				<div class="avatar">
				  <img
					class="avatar-img rounded-circle border border-white"
					alt="User Image"
					src="/img/avatar.jpg"
				  />
				</div>
				<div class="avatar">
				  <img
					class="avatar-img rounded-circle border border-white"
					alt="User Image"
					src="/img/avatar.jpg"
				  />
				</div>
				<div class="avatar">
				  <img
					class="avatar-img rounded-circle border border-white"
					alt="User Image"
					src="/img/avatar.jpg"
				  />
				</div>
				<div class="avatar">
				  <a
					href=""
					class="avatar-title rounded-circle border border-white"
					data-bs-toggle="modal"
					data-bs-target="#assign_leader"
					><i class="fa fa-plus"></i
				  ></a>
				</div>
			  </div>
			</div>
			<div class="pro-team-members">
			  <h4>Team</h4>
			  <div class="avatar-group">
				<div class="avatar">
				  <img
					class="avatar-img rounded-circle border border-white"
					alt="User Image"
					src="/img/avatar.jpg"
				  />
				</div>
				<div class="avatar">
				  <img
					class="avatar-img rounded-circle border border-white"
					alt="User Image"
					src="/img/avatar.jpg"
				  />
				</div>
				<div class="avatar">
				  <img
					class="avatar-img rounded-circle border border-white"
					alt="User Image"
					src="/img/avatar.jpg"
				  />
				</div>
				<div class="avatar">
				  <a
					href=""
					class="avatar-title rounded-circle border border-white"
					data-bs-toggle="modal"
					data-bs-target="#assign_user"
					><i class="fa fa-plus"></i
				  ></a>
				</div>
			  </div>
			</div>
		  </div>
		</div>
		<div class="col-8 text-end">
		  <a
			href="#"
			class="btn btn-white float-end ms-2"
			data-bs-toggle="modal"
			data-bs-target="#add_task_board"
			><i class="fa fa-plus"></i> Create List</a
		  >
		  <router-link
			to="project-view"
			class="btn btn-white float-end"
			title="View Board"
			><i class="fa fa-link"></i
		  ></router-link>
		</div>
		<div class="col-12">
		  <div class="pro-progress">
			<div class="pro-progress-bar">
			  <h4>Progress</h4>
			  <div class="progress">
				<div
				  class="progress-bar bg-success"
				  role="progressbar"
				  style="width: 20%"
				></div>
			  </div>
			  <span>20%</span>
			</div>
		  </div>
		</div>
	  </div>
	  <div class="kanban-board card mb-0">
		<div class="card-body">
		  <div class="kanban-cont">
			<div
			  v-for="(task, index) in tasks"
			  :key="index"
			  class="kanban-list"
			  :class="task.color"
			>
			  <div class="kanban-header">
				<span class="status-title">{{ task.name }}</span>
				<div class="dropdown kanban-action">
				  <a href="" data-bs-toggle="dropdown">
					<i class="fa fa-ellipsis-v"></i>
				  </a>
				  <div class="dropdown-menu dropdown-menu-right">
					<a
					  class="dropdown-item"
					  href="#"
					  data-bs-toggle="modal"
					  data-bs-target="#edit_task_board"
					  >Edit</a
					>
					<a class="dropdown-item" href="#">Delete</a>
				  </div>
				</div>
			  </div>
			  <div class="kanban-wrap">
				<draggable
				  class="list-group"
				  v-model="task.data"
				  group="people"
				  @change="log"
				  itemKey="id"
				  @start="drag=true" 
  				@end="drag=false" 
				  :move="checkMove"
				 
				
				>
				  <template #item="{ element }">
					
					<div class="card panel">
					  <div class="kanban-box">
						<div class="task-board-header">
						  <span class="status-title"
							><a href="task-view.html">{{ element.name }}</a></span
						  >
						  <div class="dropdown kanban-task-action">
							<a href="" data-bs-toggle="dropdown">
							  <i class="fa fa-angle-down"></i>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
							  <a
								class="dropdown-item"
								href="#"
								data-bs-toggle="modal"
								data-bs-target="#edit_task_modal"
								>Edit</a
							  >
							  <a class="dropdown-item" href="#">Delete</a>
							</div>
						  </div>
						</div>
						<div class="task-board-body">
						  <div class="kanban-info">
							<div class="progress progress-xs">
							  <div
								class="progress-bar"
								role="progressbar"
								style="width: 20%"
								aria-valuenow="20"
								aria-valuemin="0"
								aria-valuemax="100"
							  ></div>
							</div>
							<span>70%</span>
						  </div>
						  <div class="kanban-footer">
							<span class="task-info-cont">
							  <span class="task-date"
								><i class="fa fa-clock-o"></i> Sep 26</span
							  >
							  <span class="task-priority badge bg-inverse-warning"
								>Normal</span
							  >
							</span>
							<span class="task-users">
							  <img
								src="/img/avatar.jpg"
								class="task-avatar"
								width="24"
								height="24"
								alt=""
							  />
							</span>
						  </div>
						</div>
					  </div>
					</div>
				  </template>
				</draggable>
			  </div>
			  <div class="add-new-task">
				<a
				  href="javascript:void(0);"
				  data-bs-toggle="modal"
				  data-bs-target="#add_task_modal"
				  >Add New Task</a
				>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  <script>
	  import { defineAsyncComponent } from "vue";
	  const draggable = defineAsyncComponent(() => import("vuedraggable"));

  
  export default {
	
	components: {
	  draggable
	},
	data() {
	  return {
		drag: false,
		tasks: [
		  {
			name: "InProgress",
			color: "kanban-danger",
			data: [
			  {
				id: 1,
				name: "First Website redesign",
				status: "pending",
			  },
			  {
				id: 2,
				name: "Website redesign",
				staus: "pending",
				color: "kanban-success",
			  },
			],
		  },
		  {
			name: "Complted",
			color: "kanban-success",
			data: [
			  {
				id: 3,
				name: "progress Website redesign",
				status: "progress",
			  },
			  {
				id: 4,
				name: "progress Website redesign",
				status: "progress",
			  },
			],
		  },
		],
		
	  };
	},
	methods: {
		checkMove: function(evt){
		//	console.log(evt.draggedContext.element.id !==2)
   		// return (evt.draggedContext.element.id!==2);
	},
	  
	  log: function(evt) {
		window.console.log(evt);
	  }
	}
  };
  </script>