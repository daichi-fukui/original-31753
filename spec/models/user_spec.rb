require 'rails_helper'

describe User do
  before do
    @user = FactoryBot.build(:user)
  end

  describe 'ユーザー新規登録' do
    context '新規登録がうまくいくとき' do
      it "family_name、first_name、email、password、password_confirmationが存在すれば登録できる" do
        expect(@user).to be_valid
      end
      it "passwordが6文字以上であれば登録できる" do
        @user.password = "123456"
        @user.password_confirmation = "123456"
        expect(@user).to be_valid
      end
      it "family_nameが全角の数字以外であれば登録できる" do
        @user.family_name = "福井"
        expect(@user).to be_valid
      end
      it "first_nameが全角の数字以外であれば登録できる" do
        @user.first_name = "大地"
        expect(@user).to be_valid
      end
    end

    context '新規登録がうまくいかないとき' do
      it "emailが空では登録できない" do
        @user.email = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("Eメールを入力してください")
      end
      it "emailに@が含まれていない場合は登録できない" do
        @user.email = "aaa.com"
        @user.valid?
        expect(@user.errors.full_messages).to include("Eメールは不正な値です")
      end
      it "重複したemailが存在する場合登録できない" do
        @user.save
        another_user = FactoryBot.build(:user)
        another_user.email = @user.email
        another_user.valid?
        expect(another_user.errors.full_messages).to include("Eメールはすでに存在します")
      end
      it "passwordが空では登録できない" do
        @user.password = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワードを入力してください", "パスワード（確認用）とパスワードの入力が一致しません")
      end
      it "passwordが5文字以下であれば登録できない" do
        @user.password = "12345"
        @user.password_confirmation = "12345"
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワードは6文字以上で入力してください")
      end
      it "passwordが存在してもpassword_confirmationが空では登録できない" do
        @user.password_confirmation = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワード（確認用）とパスワードの入力が一致しません")
      end
      it "family_nameが空だと登録できない" do
        @user.family_name = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("名字を入力してください", "名字は全角を使用してください")
      end
      it "family_nameが数字だと登録できない" do
        @user.family_name = "０"
        @user.valid?
        expect(@user.errors.full_messages).to include("名字は全角を使用してください")
      end
      it "family_nameが半角だと登録できない" do
        @user.family_name = "ｱ"
        @user.valid?
        expect(@user.errors.full_messages).to include("名字は全角を使用してください")
      end
      it "first_nameが空だと登録できない" do
        @user.first_name = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("名前を入力してください", "名前は全角を使用してください")
      end
      it "first_nameが数字だと登録できない" do
        @user.first_name = "０"
        @user.valid?
        expect(@user.errors.full_messages).to include("名前は全角を使用してください")
      end
      it "first_nameが半角だと登録できない" do
        @user.first_name = "ｱ"
        @user.valid?
        expect(@user.errors.full_messages).to include("名前は全角を使用してください")
      end
    end
  end
end
