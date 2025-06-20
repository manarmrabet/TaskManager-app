import StatsCards from "./StatsCards";


const StatsSection = ({ stats }) => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Carte Totale - Bleu */}
      <StatsCards 
        title="Total Tasks" 
        value={stats.total} 
        
        textColor=""
        
      />
      
      {/* Carte En attente - Orange */}
      <StatsCards
        title="Pending Tasks" 
        value={stats.pending}
        
        textColor="text-violet-600"
        
      />
      
      {/* Carte En cours - Violet */}
      <StatsCards
        title="In Progress" 
        value={stats.inProgress}
        
        textColor="text-cyan-600"
        
      />
      
      {/* Carte Terminées - Vert */}
      <StatsCards 
        title="Completed Tasks" 
        value={stats.completed}
        
        textColor="text-lime-500"
        
      />
    </div>
  );
};

export default StatsSection;