<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$data = [
  'nombre' => 'Alan',
  'edad' => 19,
  'correo' => 'alan.velozo@davinci.edu.ar'
];

echo json_encode($data);