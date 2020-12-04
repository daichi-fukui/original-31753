class ReservationsController < ApplicationController
  def index
  end

  def new
    @reservation = Reservation.new
    @reservations = Reservation.all
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      redirect_to new_reservation_path
    else
      redirect_to new_reservation_path
    end
  end

  def edit
    @reservation = Reservation.find(params[:id])
  end

  def update
    @reservation = Reservation.find(params[:id])
    if @reservation.update(reservation_params)
      redirect_to new_reservation_path
    else
      render :edit
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
    redirect_to new_reservation_path
  end

  private

  def reservation_params
    params.require(:reservation).permit(:create_time_id, :start_time).merge(user_id: current_user.id)
  end
end
