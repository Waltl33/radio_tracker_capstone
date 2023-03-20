class SessionsController < ApplicationController
   
    def create 
        user = User.find_by(email:params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            
            render json:user, status: :ok        
        else
            render json: {error: "Sorry Invalid email and/or Password!"},
            status: :unauthorized

        end
    end

    def destroy
        session.delete :user_id
         head :no_content
    end
end

# private 
# def user_params
#     params.permit(:email, :password)
# end
