class UserCardsController < ApplicationController
    def create
        
         5.times do 
         card = Card.all.sample
         UserCard.create(user_id: params[:id], card_id: card.id)
        end
        user = User.find(params[:id])
        render json: user.cards
    end
end



# 5.timesCard at randomCard.all.samplecardUserCard.create(user_id: params of the id, card_id: card)json: user.cardsUser.find(params of the id).cards