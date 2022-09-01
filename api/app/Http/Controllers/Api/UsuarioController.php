<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SporttaUsers;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    
    public function index()
    {
        $users = SporttaUsers::all();
        return $users;
    }

    
    public function store(Request $request)
    {
        $user = new SporttaUsers();
        $user->name = $request->name;
        $user->mail = $request->mail;
        $user->phone = $request->phone;

        $user->save();
    }

    
    public function show($id)
    {
        $user = SporttaUsers::find($id);
        return $user;
    }

    
    public function update(Request $request, $id)
    {
        $user = SporttaUsers::findorFail($request->id);
        $user->name = $request->name;
        $user->mail = $request->mail;
        $user->phone = $request->phone;

        $user->save();
        return $user;
    }

    
    public function destroy($id)
    {
        $user = SporttaUsers::destroy($id);
        return $user;
    }
}
