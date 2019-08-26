FROM python:3.7
WORKDIR /app
ADD requirements.txt /app
RUN pip install -r requirements.txt
ADD . /app
EXPOSE 8000
CMD [ "python", "app/main.py" ]
# TODO not show logs
# CMD [ "adev", "runserver", "app/main.py" ]
