from django.contrib.auth import login
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView

from .forms.signup import SignUpForm


def profile(request):
    if request.method == "POST":
        user = request.user
        user.email = request.POST["email"]
        user.username = request.POST["username"]
        user.save()
        return redirect("profile")
    else:
        return render(request, "accounts/profile.html")


class SignUpView(CreateView):
    form_class = SignUpForm
    success_url = reverse_lazy("profile")
    template_name = "accounts/signup.html"

    def form_valid(self, form):
        user = form.save()
        login(self.request, user)
        self.object = user
        return redirect(self.get_success_url())