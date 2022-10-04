<template>

        <div class="main-wrapper">
            <div class="account-content">
                <div class="container">
                    <div class="account-logo">
                       <router-link to="/">
                        <img src="/img/logo.png" alt="Marndi's Technologies">
                    </router-link>
                    </div>
                    <div class="account-box">
                        <div class="account-wrapper">
                            <h3 class="account-title">Register</h3>
                            <p class="account-subtitle">Access to our dashboard</p>
                            <form action="/admin-dashboard">
                                <div class="form-group">
                                    <label>Email<span class="mandatory">*</span></label>
                                    <input class="form-control" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Password<span class="mandatory">*</span></label>
                                    <input class="form-control" type="password">
                                </div>
                                <div class="form-group">
                                    <label>Repeat Password<span class="mandatory">*</span></label>
                                    <input class="form-control" type="password">
                                </div>
                                <div class="form-group text-center">
                                    <button class="btn btn-primary account-btn" type="submit">Register</button>
                                </div>
                                <div class="account-footer">
                                    <p>Already have an account? 
                                        <router-link to="/login">Login</router-link>
                                        </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
</template>