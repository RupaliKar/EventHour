<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome to home</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="{{ asset('apple-touch-icon.png') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('https://use.fontawesome.com/releases/v5.7.2/css/all.css') }}" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    
    <link rel="stylesheet" href="{{ asset('/admin/css/grid.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/admin/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('/admin/css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('/admin/css/responsive.css') }}">
    <link rel="stylesheet" href="{{ asset('/admin/css/style.css') }}">
    <!-- <link rel="stylesheet" href="{{ asset('/css/admin/main.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}"> -->

<body>
    <div id="app">
        <admin></admin>
    </div>
</body>

<script src="/js/app.js"></script>

</html> 