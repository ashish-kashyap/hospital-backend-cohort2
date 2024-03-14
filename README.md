This is a in-memory hospital where 4 routes have been created:
1. GET - User can check how many kidneys they have and their health;
2. POST - User can add a new kidney
3. PUT - User can replace a kidney and make it a healthy kidney
4. DELETE - User can remove a idney

Few edge cases have also been considered over here:
1. What should happen if anyone tries to delete kidneys when there are no kidneys - For this we are returning 411 status code as well as msa stating "You have no bad kidneys"
2. What should happen if they try to make a kidney healthy when all kidney are already healthy - For this we are returning 413 status code as well as msa stating "You have no unhealthy kidneys"
