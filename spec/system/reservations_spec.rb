require 'rails_helper'

RSpec.describe '予約取得', type: :system do
  before do
    @user = FactoryBot.create(:user)
  end
  context '予約を取得できるとき'do
    it 'ログインしたユーザーは予約取得できる' do
      # ログインする
      visit new_user_session_path
      fill_in 'user_email', with: @user.email
      fill_in 'user_password', with: @user.password
      find('input[name="commit"]').click
      expect(current_path).to eq root_path
      # 予約取得ページへのリンクがあることを確認する
      expect(page).to have_content('予約を取る')
      # 予約取得ページに移動する
      visit new_reservation_path
      # フォームから日付を選択する
      find("#reservation_start_time_1i").find("option[value='2025']").select_option
      find("#reservation_start_time_2i").find("option[value='1']").select_option
      find("#reservation_start_time_3i").find("option[value='1']").select_option
      find("#reservation_create_time_id").find("option[value='2']").select_option
      # 送信するとReservationモデルのカウントが1上がることを確認する
      expect{
        find('input[name="commit"]').click
      }.to change { Reservation.count }.by(1)
      # 予約取得ページに遷移することを確認する
      expect(current_path).to eq new_reservation_path
      # 予約取得ページには先ほど取得した予約情報が存在することを確認する
      expect(page).to have_content('9:00~9:50')
    end
  end
  context '予約を取得できないとき'do
    it 'ログインしていないと予約取得ページに遷移できない' do
      # トップページに遷移する
      visit root_path
      # 予約取得ページへのリンクがない
      expect(page).to have_no_content('予約を取る')
    end
  end
end