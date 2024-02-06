<script setup>

const users = [];


const getUsers = () => {
    axios.get('/api/users')
    .then((response) => {
        users = response.data;
    })
  
}

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
                                            <td></td>
                                            <td>                 
                                                <!-- <div style="display: flex; justify-content: center;">
                                                    <a href="customer-register?action=update&&merchant_id=<?php echo $row['id']?>" class="btn btn-success btn-sm  " style="margin-right: 5px;" ><i class="fa fa-eye"></i> </a>
                                                    <a href="customer-register?action=update&&customer_id=<?php echo $row['id']?>" class="btn btn-primary btn-sm  " style="margin-right: 5px;"><i class="fa fa-edit"></i> </a>
                                                    </div> -->
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
    
</template>