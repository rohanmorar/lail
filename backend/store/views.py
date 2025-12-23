from django.http import JsonResponse

# Create your views here.
def home(req):
    data = {
        'msg': 'welcome to my store'
    }
    return JsonResponse(data)