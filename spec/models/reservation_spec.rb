require 'rails_helper'

describe Reservation do
  before do
    @reservation = FactoryBot.build(:reservation)
  end

  describe '技能教習予約取得' do
    context '予約が出来るとき' do
      it "start_time、create_time_idが存在すれば予約できる" do
        expect(@reservation).to be_valid
      end
    end

    context '予約が出来ないとき' do
      it "start_timeが今日以前だと取得できない" do
        @reservation.start_time = Date.today
        @reservation.valid?
        expect(@reservation.errors.full_messages).to include("予約は翌日以降の日付を選択してください。")
      end

      it "create_time_idが未選択だと取得できない" do
        @reservation.create_time_id = 1
        @reservation.valid?
        expect(@reservation.errors.full_messages).to include("時間を選択して下さい。")
      end
    end
  end
end
