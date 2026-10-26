param([string]$RepositoryRoot=(Split-Path $PSScriptRoot -Parent))
$ErrorActionPreference='Stop'
$source=Join-Path $RepositoryRoot 'epi-center-v0.8.68-manual-acceptance-repairs.html'
$html=[IO.File]::ReadAllText($source)
# Change storage string literals only. Keep the canonical candidate untouched.
$keys=@('epicenter_foundation_v060','epicenter_proto_v0523','epicenter_proto_v0522','epicenter_proto_v0521','epicenter_proto_v051','epicenter_proto_v1')
$found=@([regex]::Matches($html,'epicenter_[A-Za-z0-9_]+').Value | Sort-Object -Unique)
if(@(Compare-Object ($keys | Sort-Object) $found).Count){throw 'Storage key inventory changed; review isolation before building.'}
foreach($key in $keys){$html=$html.Replace("'$key'","'epicenter_development_v0868_$key'")}
if([regex]::IsMatch($html,"['"" ]epicenter_(foundation|proto)_")){throw 'Unisolated save key remains'}
$dist=Join-Path $PSScriptRoot 'dist'
New-Item -ItemType Directory -Path $dist -Force | Out-Null
[IO.File]::WriteAllText((Join-Path $dist 'game.html'),$html,[Text.UTF8Encoding]::new($false))
Copy-Item -LiteralPath (Join-Path $PSScriptRoot 'launcher.html') -Destination (Join-Path $dist 'index.html') -Force
Write-Output 'Built isolated preview; canonical candidate unchanged.'
