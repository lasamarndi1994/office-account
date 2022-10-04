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
                    <h3 class="account-title">Forgot Password?</h3>
                    <p class="account-subtitle">Enter your email to get a password reset link</p>
                    <form>
                        <div class="form-group">
                            <label>Email Address</label>
                            <input class="form-control" type="text">
                        </div>
                        <div class="form-group text-center">
                            <button class="btn btn-primary account-btn" type="submit">Reset Password</button>
                        </div>
                        <div class="account-footer">
                            <p>Remember your password? 
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

<script>
export default{

}
</script>