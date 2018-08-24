from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    if request.method=="POST": #Checks if request method is POST or GET and initializes the correct process below
        if request.POST['val_one'] and request.POST['val_two']: #Checks to see if both the first input box and second input box are not empty, if either are empty: returns "You must enter a value in both input boxes."
            one = float(request.POST['val_one']) #Sets a variable equal to the first input box and converts it to a float
            two = float(request.POST['val_two']) #Sets a variable equal to the second input box and converts it to a float
            operator = request.POST['operator'] #Sets a variable equal to the operator drop down box
            if operator == '+': #If the operator is +, add the two floats together and render out the output as variable answer
                answer = one + two
                return render(request, 'calculator/home.html', {'answer': answer})
            elif operator == '-': #If the operator is -, subtract input two from input one and render out the output as variable answer
                answer = one - two
                return render(request, 'calculator/home.html', {'answer': answer})
            elif operator == '*': #If the operator is *, multiply the two floats together and render out the output as variable answer
                answer = one * two
                return render(request, 'calculator/home.html', {'answer': answer})
            elif operator == '/': #If the operator is /, divide input one by input two and render out the output as variable answer
                if two == 0: #checks to make sure the second input is not zero as you cannot divide by zero, if the second input is zero the output is returned as "You cannot divide by zero."
                    answer = 'You cannot divide by zero.'
                else:
                    answer = one / two
                return render(request, 'calculator/home.html', {'answer': answer})
        else:
            answer = 'You must enter a value in both input boxes.'
            return render(request, 'calculator/home.html', {'answer': answer})
    else:
        return render(request, 'calculator/home.html')
