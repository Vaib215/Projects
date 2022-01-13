from ChatbotVerse import chatbotVerse as cbv
import nltk
nltk.download('punkt') 
nltk.download('wordnet')
trainer = cbv.modelTrain()
intents = trainer.loadIntents('intents.json')  # The path where the intents.json file is saved
words, classes = trainer.preprocess_save_Data(intents)  # Prepares and saves preprocessed word data
train_x, train_y = trainer.prepareTrainingData(words, classes)  # Prepares training data
model = trainer.createModel(train_x, train_y, save_path='cbv_model.model')
predictor = cbv.modelPredict('intents.json', 'cbv_model.model')
running = True
while running:
    msg = input('You: ')
    response = predictor.chatbot_response(msg)
    print('ABC:',response)
    if response=='Have a nice day' or response=='See you later, thanks for using ABC.' or response=='Bye! It was nice talking to you.':
      running=False