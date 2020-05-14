require 'rails_helper'

describe Message do
  describe '#create' do

    context 'messageを保存できる場合' do

      it "textがあれば保存できる" do
        message = build(:message, image: nil)
        expect(message).to be_valid
      end
      
      it "imageがあれば保存できる" do
        message = build(:message, text: nil)
        expect(message).to be_valid
      end
      
      it "textとimageがあれば保存できる" do
        message = build(:message)
        expect(message).to be_valid
      end

    end

    context 'messageを保存できない場合' do

      it "textとimageが両方空だと保存できない" do
        message = build(:message, text: nil, image: nil)
        message.valid?
        expect(message.errors[:text]).to include("を入力してください")
      end
      
      it "group_idが無いと保存できない" do
        message = build(:message, group_id: nil)
        message.valid?
        expect(message.errors[:group]).to include("を入力してください")
      end
      
      it "user_idが無いと保存できない" do
        message = build(:message, user_id: nil)
        message.valid?
        expect(message.errors[:user]).to include("を入力してください")
      end

    end    

  end
end