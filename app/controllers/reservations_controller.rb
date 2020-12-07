class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:edit, :update, :destroy]

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
  end

  def update
    if @reservation.update(reservation_params)
      redirect_to new_reservation_path
    else
      render :edit
    end
  end

  def destroy
    @reservation.destroy
    redirect_to new_reservation_path
  end

  private

  def reservation_params
    params.require(:reservation).permit(:create_time_id, :start_time).merge(user_id: current_user.id)
  end

  def set_reservation
    @reservation = Reservation.find(params[:id])
  end
end
