from fastapi import APIRouter

task_router = APIRouter(prefix="/tasks", tags=["Tasks"])

@task_router.get('get-tasks')
def get_all_tasks():
    ...
    
@task_router.put('/add-task')
def add_single_task():
    ...

@task_router.patch('update-task')
def update_task():
    ...

@task_router.delete('delete-task')
def delete_task():
    ...
