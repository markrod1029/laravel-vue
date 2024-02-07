<script setup>
import axios from 'axios';
import { onMounted, ref,  reactive } from 'vue';
import { Form, Field} from 'vee-validate';
import * as  yup from 'yup';

let users = ref([]);

const form = reactive({
    name: '',
    email: '',
    password: '',
});

const getUsers = () => {
    axios.get('/api/users')
    .then((response) => {
        users.value = response.data;
    })
}


const createUser = (values) => {
    console.log(values);
    axios.post('/api/users', values)
    .then((response) =>{
        users.value.push(response.data)
        form.name = '';
        form.email = '';
        form.password = '';
        $('#createUserModal').modal('hide');

    })
};

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8),

});
// const createUser = () => {
//     axios.post('/api/users', form)
//     .then((response) => {
//         users.value.push(response.data)
//         form.name = '';
//         form.email = '';
//         form.password = '';
//         $('#createUserModal').modal('hide');
//     })
// }


onMounted(() => {
    getUsers(); 
});



</script>


<template>

    <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">List Users</h1>
                    </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">List Users</a></li>
                                <li class="breadcrumb-item active">Starter Page</li>
                            </ol>
                        </div>
                </div>
            </div>
        </div>
            
    <div class="container">
        <div class="container-fluid">     
            
            <div class=" mb-4">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#createUserModal" data-whatever="@createUserModal">Create New User</button>
            </div>


                        <div class="card">
                            <div class="box-header">
                                <div class="card-body">
                                    <table   class='display dataTable table-bordered' style="width:100%;">
                                        <thead>
                                        <tr>
                                                <th> Customer Name</th>
                                                <th>Email Address</th>
                                                <th>Address</th>
                                                <th>Action</th>
                                        </tr>
                                        </thead>
                                            <tbody>
                                        
                                    
                                            <tr v-for = "user in users" :key = "user.id" >
                                            <td>{{ user.name }}</td>
                                            <td>{{ user.email }}</td>
                                            <td>{{ user.email_verified_at }}</td>
                                            <td>                 
                                                <div style="display: flex; justify-content: center;">
                                                    <a href="customer-register?action=update&&merchant_id=<?php echo $row['id']?>" class="btn btn-success btn-sm  " style="margin-right: 5px;" ><i class="fa fa-eye"></i> </a>
                                                    <a href="customer-register?action=update&&customer_id=<?php echo $row['id']?>" class="btn btn-primary btn-sm  " style="margin-right: 5px;"><i class="fa fa-edit"></i> </a>
                                                    </div>
                                            </td> 
                                            </tr>
                                            </tbody>
                                        <tfoot>
                                            <th>Customer Name</th>
                                            <th>Email Address</th>
                                            <th>Address</th>
                                            <th>Action</th>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
        
        </div>
    </div>
    

    <div class="modal fade" id="createUserModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
        
                <Form @submit="createUser" :validation-schema="schema"  v-slot="{errors}">

                <div class="modal-body">

                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Name:</label>
                        <Field   type="text" class="form-control" :class="{'is-invalid': errors.name}" name="name" id="name" />
                        <span class="invalid-feedback" >{{ errors.name }}</span>
                    </div>

                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Email:</label>
                        <Field  type="text" class="form-control" name="email" :class="{'is-invalid': errors.email}" id="email" />
                        <span class="invalid-feedback" >{{ errors.email }}</span>
                    </div>


                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Password:</label>
                        <Field  type="password" class="form-control" :class="{'is-invalid': errors.password}" name="password" id="password" />
                        <span class="invalid-feedback">{{ errors.password }}</span>
                    </div>


                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button  type="submit" class="btn btn-primary">Send message</button>
                </div>
            </Form>
        
            </div>
        </div>
    </div>
    
</template>